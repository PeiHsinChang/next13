export default function BBB(gssp) {
  return async (context) => {
    // const { req, res } = context;
    // const token = req.cookies.userToken;

    console.log("BBB");

    return await gssp({ ...context, bbb: "aabbbbba" }); // Continue on to call `getServerSideProps` logic
  };
}
