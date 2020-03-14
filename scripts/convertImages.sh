#!/bin/bash
# Based on
# https://medium.com/@jmuzsik/how-to-setup-next-gen-images-for-react-hosted-on-amazon-s3-7ba2d2caad21

inputImage="*.jpeg"
extensions=("jpeg" "webp" "jp2")
sizes=(228 288 472 576 720 960 1146 1472 1680 1920)
importsFileName="imports.ts"
imagesFileName="images.tsx"

echo -e "Will convert ${inputImage} images\n"

# Loop through all images in the Image directory
for file in images/$inputImage; do
  # This means, do not run this code on a directory, only on a file (-f)
  if [[ -f $file ]]
  then
    filename=$(basename -- "$file")
    filenameWithoutExtension="${filename%.*}"
    imageName=${filenameWithoutExtension//[-]/_} # replace - with _

    # Clear file
    > $importsFileName
    mkdir output/$imageName

    echo -e "<ResponsiveImage alt='${imageName}'\nsizes='100vw'\nsrcSet={{" > $imagesFileName

    for ext in "${extensions[@]}"
    do
      convertCommand=""

      # Opens object for each extension
      echo -e "  ${ext}: {" >> $imagesFileName

      for size in "${sizes[@]}"
      do
        # Adds import
        echo -e "import ${imageName}_${ext}_${size} from './${imageName}_${size}.${ext}'" >> $importsFileName

        # Adds srcSet property
        echo -e "  ${size}: ${imageName}_${ext}_${size}," >> $imagesFileName

        qualityCommand=$([ "$ext" == "jp2" ] && echo "-define jp2:rate=32" || echo "-quality 90")
        convertCommand="${convertCommand} ( -clone 0 -resize ${size} ${qualityCommand} -set filename:width %t_%w -write output/$imageName/%[filename:width].${ext} +delete ) "
      done
      convertCommand="${convertCommand} null:"

      echo -e "Converting $file to ${ext}"

      # Run convertion command
      magick convert $file $convertCommand

      echo -e "\n}," >> $imagesFileName
      echo "" >> $importsFileName
    done
    echo -e "}}\n/>\n</>\n" >> $imagesFileName
    cat $importsFileName templates/component.tsx $imagesFileName > output/$imageName/$imageName.tsx
  fi
  echo ""
done
rm $importsFileName $imagesFileName
echo -e "Done"
