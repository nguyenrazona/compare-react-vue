import React, { useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import { List1 } from './components/List1';
import { List2 } from './components/List2';
import { List3 } from './components/List3';

function App() {
  const List = List1;
  // const List = List2;
  // const List = List3;
  // const List = createList(10, 1);

  useEffect(() => {
    // Log performance
    setTimeout(function() {
      const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
      console.log(`load time: ${loadTime} ms`)
    }, 1000);
  }, []);

  return (
    <div className="App">
      <Wrap>
        <List members={30} />
      </Wrap>
    </div>
  );
}

function createList(members: number, depth: number) {
  let List: any = null;

  if(depth > 1) {
    List = createList(members, depth - 1);
  }

  return function () {
    return (
      <ul>
        {Array.from({length: members}).map((_, index) => (
          <li key={index}>
            <img src="/image1.png" alt="image1" />
            <p>Eiusmod proident cillum tempor sint ut enim esse sunt et. Esse eiusmod tempor et aliquip magna nulla irure fugiat eu aliquip aute non sit et. Consectetur pariatur proident minim non dolore enim aliquip aute voluptate mollit sit. Eiusmod excepteur deserunt pariatur tempor proident qui eiusmod.</p>
            {!!List && (
            <WrapList>
              <List />
            </WrapList>
            )}
          </li>
        ))}
      </ul>
    );
  }
}

const Wrap = styled.div`
  width: 960px;
  margin: 0 auto;
`

const WrapList = styled.div`
  padding-left: 100px;
`

export default App;
