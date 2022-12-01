export default () => {
  return <div>893</div>;
};

export async function getServerSideProps(context) {
  console.log("getServerSideProps_b");
  return {
    props: {}, // will be passed to the page component as props
  };
}
