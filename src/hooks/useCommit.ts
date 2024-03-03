import { useQuery } from '@tanstack/react-query';

import { axios } from '@/utils';

const useCommit = () => {
  // 마지막 커밋 기록 조회
  const getLastCommit = async () => {
    const owner = 'ma9pie';
    const repo = 'ma9pie';
    const branch = 'main';

    try {
      const res: any = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}/branches/${branch}`
      );
      const lastCommitTime = res.commit.commit.committer.date;
      const date = new Date(lastCommitTime);
      return date.toLocaleString();
    } catch (err) {
      console.log(err);
    }
  };

  const { data: lasCommitTime = '' } = useQuery({
    staleTime: 60000,
    queryKey: ['lasCommitTime'],
    queryFn: getLastCommit,
  });

  return { lasCommitTime };
};

export default useCommit;
