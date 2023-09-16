import Feed from '@components/Feed';
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Get New Prompts
        <br className="max-md:hidden"/>
        <span className="orange_gradient"> Ai-Powered Prompts</span>

      </h1>
    
     <p className="desc text-center"> Kartopia is oprn source AI prompting tool for mordern world to create and discover new ai prompts from the people all obver the world </p>
    {/*feed*/}
       <Feed />

    </section>
  )
}

export default Home