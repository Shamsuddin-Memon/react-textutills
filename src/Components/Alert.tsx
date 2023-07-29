import React from "react";

export default function Alert(props: any) {
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        {props.alert.type} {props.alert.message}
      </div>
    )
  );
}
function lowercharAt(arg0: number) {
  throw new Error("Function not implemented.");
}
