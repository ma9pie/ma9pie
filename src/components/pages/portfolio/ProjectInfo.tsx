import React from 'react';

import Flex from '@/components/common/Flex';
import ProjectBadge from '@/components/common/ProjectBadge';
import Text from '@/components/common/Text';
import { PortfolioProject } from '@/types';
import { formatProjectPeriod } from '@/utils';

const ProjectInfo = ({
  company,
  projectType,
  title,
  period,
  service,
  github,
  techStacks,
}: PortfolioProject) => {
  return (
    <Flex col gap={8}>
      <Flex items="end" gap={16}>
        <Text.T2>{title}</Text.T2>
        <ProjectBadge>
          {projectType}
          {company && ` - ${company}`}
        </ProjectBadge>
      </Flex>

      {service && (
        <Flex gap={4}>
          <Text>URL :</Text>
          <Text.Link
            href={service.url}
            lineThrough={!service.active}
            target="_blank"
          >
            {service.url}
          </Text.Link>
          {!service.active && <Text>(서비스 종료)</Text>}
        </Flex>
      )}

      {github && (
        <Flex gap={4}>
          <Text>GitHub :</Text>
          <Text.Link href={github} target="_blank">
            {github}
          </Text.Link>
        </Flex>
      )}

      <Text>{`Period : ${formatProjectPeriod(period)}`}</Text>

      <Text>{`Tech Stacks : ${techStacks.join(', ')}`}</Text>
    </Flex>
  );
};

export default ProjectInfo;
