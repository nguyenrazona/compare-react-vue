import React from 'react';

export function List1({members}: {members: number}) {
  return (
    <ul>
      {Array.from({length: members}).map((_, index) => (
        <li key={index}>
          <img src="/image1.png" alt="image1" />
          <p>Eiusmod proident cillum tempor sint ut enim esse sunt et. Esse eiusmod tempor et aliquip magna nulla irure fugiat eu aliquip aute non sit et. Consectetur pariatur proident minim non dolore enim aliquip aute voluptate mollit sit. Eiusmod excepteur deserunt pariatur tempor proident qui eiusmod.</p>
        </li>
      ))}
    </ul>
  );
}
