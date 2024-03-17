import React from 'react';
import tw, { styled } from 'twin.macro';

import Flex from '@/components/common/Flex';
import { Li, Ul } from '@/components/common/List';
import Text from '@/components/common/Text';
import Content from '@/components/pages/resume/Content';
import { EXPERIENCES } from '@/constants';
import { formatProjectPeriod, formatWorkingPeriod } from '@/utils';

const Experiences = () => {
  return (
    <Content>
      <Text.T1>Experiences</Text.T1>

      {EXPERIENCES.map(({ company, position, workingPeriod, projects }) => (
        <SectionContainer key={company}>
          <Flex col gap={8} flex={4}>
            <Text.T2>{company}</Text.T2>

            <div>
              <Text>{position}</Text>
              <Text>{formatWorkingPeriod(workingPeriod)}</Text>
            </div>
          </Flex>

          <Flex col gap={32} flex={6}>
            {projects.map(
              ({
                title,
                projectPeriod,
                service,
                description,
                tasks,
                techStacks,
              }) => (
                <ProjectContainer key={title}>
                  <Text.T3>{title}</Text.T3>

                  <Flex col gap={4}>
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
                    <Text>{`Period : ${formatProjectPeriod(
                      projectPeriod
                    )}`}</Text>
                    <Text>{description}</Text>
                  </Flex>

                  <Flex col gap={8}>
                    <Text.T4>Tasks</Text.T4>
                    <Ul>
                      {tasks.map((task) => (
                        <Li key={task}>{task}</Li>
                      ))}
                    </Ul>
                  </Flex>

                  <Flex col gap={8}>
                    <Text.T4>Tech Stacks</Text.T4>
                    <Text>{techStacks.join(', ')}</Text>
                  </Flex>
                </ProjectContainer>
              )
            )}
          </Flex>
        </SectionContainer>
      ))}
    </Content>
  );
};

export default Experiences;

const SectionContainer = styled.div`
  ${tw`flex gap-6`};
  ${tw`mobile:flex-col`};
  ${tw`desktop:flex-row`};
`;
const ProjectContainer = styled.div`
  ${tw`flex flex-col gap-3`};
`;
