
import styles from "./page.module.css";
import { listQuestionVoByPageUsingPost } from "@/api/questionController";
import Title from "antd/es/typography/Title";
import { Divider, Flex, message } from "antd";
import Link from "next/link";

import QuestionList from "@/components/QuestionList";

export default async function Home() {

  let questionList = [];

  try {
    const res = await listQuestionVoByPageUsingPost({
      pageSize: 20,
      sortField: "createTime",
      sortOrder: "descend",
    });
    questionList = res.data.records ?? [];
  } catch (e) {
    // message.error("获取题目列表失败，" + e.message);
    questionList = [];
  }


  return (
    <div id="home" style={{ 
      padding: '0 40px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <Flex justify="space-between" align="center">
        <Title level={3}>最新题目</Title>
        <Link href={"/questions"}>查看更多</Link>
      </Flex>
      <QuestionList questionList={questionList} />
    </div>
  );
}
