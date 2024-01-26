import React, { useState } from "react";
import { Container } from "../../../Components/Contatiner";
import { FlexWrapper } from "../../../Components/FlexWrapper";
import { SectionTitle } from "../../../Components/SectionTitle";
import img1 from "../../../assets/images/works/img1.webp";
import img2 from "../../../assets/images/works/img2.webp";
import { TabMenu, TabStatusType } from "./worksMenu/TabMenu";
import { S } from "./Work_Stylles";
import { Work } from "./work/work";
import { AnimatePresence, motion } from "framer-motion";

const tabsItems: Array<{ status: TabStatusType; title: string }> = [
  {
    title: "All",
    status: "all",
  },
  {
    title: "landing-page",
    status: "landing",
  },
  {
    title: "React",
    status: "react",
  },
  {
    title: "spa",
    status: "spa",
  },
];

const workData = [
  {
    src: img1,
    title: "Social Network",
    descriptoin:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    type: "spa",
    id:1
  },
  {
    src: img2,
    title: "Timer",
    descriptoin:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    type: "react",
    id:2
  },
];

export const Works: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
  let filterWorks = workData;

  if (currentFilterStatus === "landing") {
    filterWorks = workData.filter((work) => work.type === "landing");
  }
  if (currentFilterStatus === "react") {
    filterWorks = workData.filter((work) => work.type === "react");
  }
  if (currentFilterStatus === "spa") {
    filterWorks = workData.filter((work) => work.type === "spa");
  }

  function changeFilterStatus(value: TabStatusType) {
    setCurrentFilterStatus(value);
  }
  return (
    <S.Works id="works">
      <Container>
        <SectionTitle> My Works</SectionTitle>
        <TabMenu
          tabsItems={tabsItems}
          changeFilterStatus={changeFilterStatus}
          currentFilterStatus={currentFilterStatus}
        />
        <FlexWrapper
          wrap="wrap"
          gap="30px"
          justify="space-between"
          align="flex-start"
        >
          <AnimatePresence>
            {filterWorks.map((w) => {
              return (
                <motion.div
                style={{width:"400px", flexGrow:1, maxWidth:"540px"}}
                layout={true}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={w.id}>
                  <Work
                    src={w.src}
                    title={w.title}
                    descriptoin={w.descriptoin}
                    key = {w.id}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
