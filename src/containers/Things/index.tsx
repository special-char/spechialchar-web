export default function Things() {
  return (
    <section className="m-4" >
      <div className=" p-3 font-bold ">
        <h1>Thinking</h1>
        <div className="text-gray-300 py-4">Useful. Relevant. Challenging.</div>
      </div>

      <div>
        <div className="flex flex-col gap-1">
          <a href="#">
            <span className="text-blue-800 font-bold">All</span>
            
          </a>
          <a href="#">
            <span className="font-bold">Strategy</span>
            
          </a>
          <a href="#">
            <span className="font-bold">Trending</span>
            
          </a>
          <a href="#">
            <span className="font-bold">Development</span>
           
          </a>
        </div>

        {/* <div className="py-8 flex flex-col gap-16">
            <div className="flex flex-col gap-3">
                <div className="">
                <img src="https://itrexgroup.com/wp-content/uploads/2024/02/iStock-1371262267-min.jpg" alt="image" className="object-cover h-72 w-screen"/>
                </div>
                <div>
                    <div className="flex gap-1">
                        <a href="#">Big Data</a>
                        <span>/</span>
                        <a href="#">Product Development</a>
                    </div>
                    <a href="#">
                        <span>Mastering data discovery: A Practical</span>
                        <span>Manual
                            <span></span>
                        </span>
                    </a>
                </div>
            </div>

            
        </div> */}
      </div>
    </section>
  );
}
