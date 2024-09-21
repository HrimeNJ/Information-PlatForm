import React from 'react';

const App = () => {
  return (
    <div className="p-6 font-sans bg-gray-50 min-h-screen">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">信息化资源平台</h1>
        <p className="text-lg text-gray-600">提供大学生生涯发展的渠道与资源信息</p>
      </header>

      <section className="mb-12 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">1. 职业规划资源</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>职业评估工具：<a href="https://www.16personalities.com/ch" className="text-blue-500 hover:underline">点击这里进行评估</a></li>
          <li>专业讲座：<a href="https://admission.nju.edu.cn/njdx/front/authorized/read.do?channelid=5620" className="text-blue-500 hover:underline">在线参与职业讲座</a></li>
        </ul>
      </section>

      <section className="mb-12 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">2. 实习与就业机会</h2>
        <p className="mb-4 text-gray-700">
          我们为学生提供各种实习和就业机会的资源：
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><a href="https://www.ncss.cn/student/shixi.html" className="text-blue-500 hover:underline">最新实习机会</a></li>
          <li><a href="https://nju.ncss.cn/" className="text-blue-500 hover:underline">就业机会平台</a></li>
        </ul>
      </section>

      <section className="mb-12 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">3. 留学与交换项目</h2>
        <p className="mb-4 text-gray-700">
          了解更多关于国际交流和留学的资源信息：
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><a href="https://www.educations.cn/articles-and-advice/how-to-study-abroad-14160" className="text-blue-500 hover:underline">海外留学机会</a></li>
          <li><a href="http://elite.nju.edu.cn/exchangesystem/" className="text-blue-500 hover:underline">学生交换项目</a></li>
        </ul>
      </section>

      <section className="mb-12 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">4. 技能提升与认证</h2>
        <p className="mb-4 text-gray-700">
          提供一系列在线课程与认证资源，帮助学生提升职业技能：
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><a href="https://www.xuetangx.com/" className="text-blue-500 hover:underline">技能课程平台</a></li>
          <li><a href="https://www.neea.edu.cn/html1/folder/1607/298-1.htm" className="text-blue-500 hover:underline">认证与资格考试信息</a></li>
        </ul>
      </section>

      <footer className="mt-12 text-center">
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition" 
          onClick={() => window.location.href = "http://219.219.115.156/#!/home"}>
          开始探索资源
        </button>
        <div className="text-sm">© 2024 计算机学院生涯发展部. All rights reserved.</div>
      </footer>

    </div>
  );
};

export default App;
