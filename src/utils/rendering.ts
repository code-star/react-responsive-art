export const renderEither = (
  condition: boolean,
  node: React.ReactNode,
  altervative: React.ReactNode
) => (condition ? node : altervative);

export const renderIf = (condition: boolean, node: React.ReactNode) =>
  renderEither(condition, node, null);
