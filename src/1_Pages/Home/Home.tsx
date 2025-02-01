'use client';

export const Home = () => {
  return (
    <div>
      Home
      {Array.from({ length: 100 }, (_, idx) => idx).map(
        (list) => (
          <div key={list}>{list}</div>
        )
      )}
    </div>
  );
};
