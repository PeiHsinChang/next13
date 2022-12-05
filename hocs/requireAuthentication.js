export default function AAA(gssp) {
  return async (context) => {
    const { req, res } = context;
    const token = req.cookies.userToken;

    console.log(123);

    return await gssp({ ...context, aaa: "aaa" }); // Continue on to call `getServerSideProps` logic
  };
}
