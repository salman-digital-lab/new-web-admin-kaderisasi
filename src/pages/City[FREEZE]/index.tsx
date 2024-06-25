import { useState } from "react";
import CityTable from "./components/CityTable";
import CityFilter from "./components/CityFilter";
import { Space } from "antd";
import { FilterType } from "./constants/type";
import { useRequest } from "ahooks";
import { getCities } from "../../api/services/city";

const MainCity = () => {
  const [parameters, setParameters] = useState<FilterType>({
    name: "",
    province_id: undefined,
  });

  const { data, loading } = useRequest(() => getCities(), {
    refreshDeps: [parameters],
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const citiesData = await getDataCity();
  //       const provincesData = await getDataProvince();

  //       const updatedCities: DataMaster[] = citiesData.map((city: DataMaster) => {
  //         const province = provincesData.find((province : DataMaster) => province.id === city.province_id);
  //         const provinceName = province ? province.name : 'Unknown Province';
  //         return { ...city, provinceName };
  //       });
  //       setData(updatedCities);
  //       setFilteredData(updatedCities);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [])

  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <CityFilter setParameter={setParameters} />
      <CityTable data={data} loading={loading} setParameter={setParameters} />
    </Space>
  );
};

export default MainCity;
