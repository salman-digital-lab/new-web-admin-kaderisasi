import React, { useState } from "react";
import MemberTable from "./components/MemberTable";
import MemberFilter from "./components/MemberFilter";
import { Flex } from "antd";
import { getProfiles } from "../../api/services/member";
import { useRequest } from "ahooks";

const MemberListPage: React.FC = () => {
  const [parameters, setParameters] = useState({
    page: 1,
    per_page: 10,
    name: "",
  });

  const { data, loading } = useRequest(
    () =>
      getProfiles({
        per_page: String(parameters.per_page),
        page: String(parameters.page),
        search: parameters.name,
      }),
    {
      refreshDeps: [parameters],
    }
  );

  return (
    <Flex vertical gap="middle">
      <MemberFilter setParameter={setParameters} />
      <MemberTable data={data} loading={loading} setParameter={setParameters} />
    </Flex>
  );
};

export default MemberListPage;
