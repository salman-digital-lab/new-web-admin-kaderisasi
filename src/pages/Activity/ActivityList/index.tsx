import React, { useState } from "react";
import ActivityTable from "./components/ActivityTable";
import ActivityFilter from "./components/ActivityFilter";
import { Space } from "antd";
import { getActivities } from "../../../api/services/activity";
import { useRequest } from "ahooks";
import { FilterType } from "./constants/type";

const MainActivity: React.FC = () => {
  const [parameters, setParameters] = useState<FilterType>({
    page: 1,
    per_page: 10,
    name: "",
    activity_type: undefined,
  });

  const { data, loading } = useRequest(
    () =>
      getActivities({
        per_page: String(parameters.per_page),
        page: String(parameters.page),
        search: parameters.name,
        activity_type: parameters.activity_type
          ? String(parameters.activity_type)
          : undefined,
      }),
    {
      refreshDeps: [parameters],
    }
  );

  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <ActivityFilter setParameter={setParameters} />
      <ActivityTable
        data={data}
        loading={loading}
        setParameter={setParameters}
      />
    </Space>
  );
};

export default MainActivity;
