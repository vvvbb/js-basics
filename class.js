// import "./class.css";

class HelloWorldButton {
  render() {
    const button = document.createElement("button");
    const body = document.querySelector("body");
    button.innerHTML = "Button";
    button.onclick = function () {
      const p = document.createElement("p");
      p.innerHTML = "PPPPP";
      p.classList.add("bg-yellow-500","text-center" );
      body.appendChild(p);
    };
    button.classList.add(
      "bg-blue-500",
      "hover:bg-blue-700",
      "text-white",
      "font-bold",
      "py-2",
      "px-4",
      "rounded",
      "flex",
      "mx-auto",
      "my-5"
      // "items-center",
    );
    // button.classList.add("btn-blue");

    body.appendChild(button);
    // document.querySelector("body").innerHTML = "Paragraph changed!";
  }
}

// export default HelloWorldButton;
const HellowWB = new HelloWorldButton();
HellowWB.render();
