import { useRouter } from "next/router";
import Layout from "../../../components/Layout";

const Issue = () => {
  const router = useRouter();
  const { id } = router.query;

  const issue =
    typeof id === "string"
      ? id
          .toLowerCase()
          .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
      : id;

  return <Layout issue={issue} />;
};

export default Issue;
