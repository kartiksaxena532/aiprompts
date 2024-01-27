import Feed from '@components/Feed';
import Nav from '@components/Nav';
import MyButton from '@components/MyButton';
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        I Will Dockerize
        <br className="max-md:hidden"/>
        <span className="orange_gradient">This Web App </span>

      </h1>
    
     <p className="desc text-center"> Web development has evolved into a dynamic field, continually shaped by technological advancements and user expectations. This scientific exploration delves into the multifaceted realm of web development, unraveling the underlying principles and emerging technologies that drive this ever-changing landscape. </p>
    {/*feed*/}
       <Feed />
       <Nav/>
       <MyButton/>
    </section>
  )
}

export default Home