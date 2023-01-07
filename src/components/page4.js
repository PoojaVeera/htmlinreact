import React from "react";
function iframe() {
  return {
    __html: '<iframe src="./map.html"></iframe>',
  };
}

export default function Page4() {
  return (
    <div>
      <div dangerouslySetInnerHTML={iframe()} />
    </div>
  );
}
