type HelloPageProps = {};

const HelloPage = async ({}: HelloPageProps) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error("An error occurred");
  return <div>hello Page</div>;
};

export default HelloPage;
