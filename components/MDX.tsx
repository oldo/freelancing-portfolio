const MDXComponents = {
  a: (props: any) => (
    <a
      {...props}
      className="font-semibold text-gray-800 border-b-2 border-accent transition-colors duration-300"
      target="_blank"
      rel="noopener noreferrer"
    />
  ),
  strong: (props: any) => (
    <strong {...props} className="font-bold text-gray-800" />
  ),
};

export default MDXComponents;
