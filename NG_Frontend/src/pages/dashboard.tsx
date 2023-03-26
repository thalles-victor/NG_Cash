import { GetServerSideProps } from "next";
import { Dashboard } from "../components/pages/Dashboard";
import { parseCookies } from "nookies";
import { getAPIClient } from "../services/axios";

export default function dashboard() {
  return(
    <Dashboard />
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apiClient = getAPIClient(context);

  const { ["gncashauth_token"]: token } = parseCookies(context);

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}