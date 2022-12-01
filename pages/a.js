import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

export default () => {
  const router = useRouter();
  const count = useSelector();
  const dispatch = useDispatch();

  const incrementCounter = () => {
    // const currentCounter = query.counter ? parseInt(query.counter) : 0;
    const href = `/b`;

    router.push(href, href, { shallow: true });
  };
  return (
    <>
      <div>987</div>
      <div onClick={incrementCounter}>b</div>
    </>
  );
};

export async function getServerSideProps(context) {
  console.log("getServerSideProps_a", Object.keys(context));
  return {
    props: {}, // will be passed to the page component as props
  };
}
