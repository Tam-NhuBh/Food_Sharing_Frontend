import Button from "../../components/Button";
import Input from "../../components/Input";
import ReviewCard from "../../components/Review/ReviewCard";

export default function LandingPage() {
  return (
    <>
      <h1 className="bg-primary font-lobster">Landing Page</h1>
      <p className="font-worksans">Welcome to the Nom Nom app!</p>

      <Button variant="primary">Submit</Button>
<Button variant="secondary" loading>Loading</Button>
<Button variant="danger" disabled>Delete</Button>

<Input
  label="Username"
  placeholder="Enter your username"
  // value={value}
  // onChange={handleChange}
  // error={errorMsg}
/>

<ReviewCard
  name="Jane Doe"
  comment="This recipe was amazing!"
  rating={4}
/>
    </>
  );
}
