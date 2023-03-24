import { useGetCryptosQuery } from '../../../store/coins/api';

export const HomeGlobalStats = () => {
  const { data, error, isError, isFetching, isLoading, isSuccess } =
    useGetCryptosQuery({ count: 10 });
  const globalStats = data?.data?.stats;
  //   const coins = data?.data?.coins;
  console.log('globalStats :>> ', globalStats);

  return (
    <div>
      <span>home-global-stats</span>
    </div>
  );
};
