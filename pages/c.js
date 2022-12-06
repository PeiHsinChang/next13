import AAA from "../hocs/requireAuthentication";
import BBB from "../hocs/BBB";

// pages/index.js (or some other page)
export default (props) => {
  console.log(props);
  return <div>CCCC</div>;
};
// https://www.quintessential.gr/blog/development/how-to-integrate-redux-with-next-js-and-ssr

//https://stackoverflow.com/questions/66081052/
export const getServerSideProps = AAA(
  BBB((context) => {
    // Your normal `getServerSideProps` code here
    console.log("getServerSideProps-context", context.aaa, context.bbb);
    return {
      props: {
        eeeee: "eeee",
        aaa: context.aaa,
        bbb: context.bbb,
        ...{ context },
      }, // will be passed to the page component as props
    };
  })
);
