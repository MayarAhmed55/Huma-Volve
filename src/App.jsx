import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";

import Button from "./Components/ui/Button";
import Card from "./Components/ui/Card";
import placeholderImg from './Components/ui/placeholderimg.png';
import Table from "./Components/ui/Table";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const ProductColumns =["Model","Description","Price","Discount"];

  const Products =[
    { Model: "Model 1", Description: "Description 1", Price: "$100", Discount: "10%" },
    { Model: "Model 2", Description: "Description 2", Price: "$200", Discount: "20%" },
    { Model: "Model 3", Description: "Description 3", Price: "$300", Discount: "30%" }
  ];

  const handleClick = (msg) => {
    alert(msg);
  };

  return (
    <>
        <h2 class="text-4xl font-bold mb-4 text-[var(--navy)] w-75 mx-auto mt-5 mb-10 text-center">Button Variants</h2>
      <div class="flex w-[90%] flex-wrap m-auto gap-x-25 gap-y-4 justify-center items-center ">
        <Button
          text="primary Button"
          onClick={() => handleClick("Hello, i am a primary button!")}
          variant="primary"
        />
        <Button
          text="secondary Button"
          onClick={() => handleClick("Hello, i am a secondary button!")}
          variant="secondary"
        />
        <Button
          text="danger Button"
          onClick={() => handleClick("Hello, i am a danger button!")}
          variant="danger"
        />


        <Button
          text="primary Button"
          onClick={() => handleClick("Hello, i am a primary button!")}
          variant="primary"
          disabled={true}
        />

        <Button
          text="secondary Button"
          onClick={() => handleClick("Hello, i am a secondary button!")}
          variant="secondary"
          disabled={true}
        />

        <Button
          text="danger Button"
          onClick={() => handleClick("Hello, i am a danger button!")}
          variant="danger"
          disabled={true}
        />
      <Button
        text="primary also (default variant)"
        onClick={() => handleClick("Hello, i am a primary button!")}
      />
      </div>

        <h2 class="text-4xl font-bold mb-4 text-[var(--navy)] w-75 mx-auto mt-28 mb-10 text-center">Cards</h2>
      <div className="flex flex w-[90%] flex-wrap m-auto gap-x-25 gap-y-4 justify-center items-center ">
        <Card title="Card 1" description="This is the first simple card component  that describes the card content." img={placeholderImg}/>
        <Card title="Card 2" description="This is the second simple card component that describes the card content." img={placeholderImg}>
          <Button 
          text="Click me!"
          onClick={() => handleClick("Hello, i am a button inside a card!")}
          variant="primary"
          ></Button> 
          </Card>

             <Card title="Card 3" description="This is the second simple card component that describes the card content." img={placeholderImg}>
          <Button 
          text="Click me!"
          onClick={() => handleClick("Hello, i am a button inside a card!")}
          variant="secondary"
          ></Button> 
          </Card>

             <Card title="Card 4" description="This is the second simple card component that describes the card content." img={placeholderImg}>
          <Button 
          text="Click me!"
          onClick={() => handleClick("Hello, i am a button inside a card!")}
          variant="danger"
          ></Button> 
          </Card>
      </div>


        <h2 class="text-4xl font-bold mb-4 text-[var(--navy)] w-75 mx-auto mt-28 mb-10 text-center">Stripped Table</h2>
      <div>
        <Table columns={ProductColumns} data={Products} stripped={true} />
      </div>
    </>
  );
}

export default App;
