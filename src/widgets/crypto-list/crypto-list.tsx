import { CoinType } from '../../types';

interface Props {
  coins: CoinType[];
}

export const CryptoList = ({ coins }: Props) => {
  return (
    <div>
      <span>crypto-list</span>
    </div>
  );
};
