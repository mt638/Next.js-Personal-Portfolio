export default function Home() {
    return (<main className="flex min-h-screen flex-col items-center lg:px-44 px-12">

        <header className="flex flex-col items-end justify-end w-full">
            <section className="flex my-6 w-fit h-12 justify-between px-12 gap-6 py-0 rounded-full bg-gray-custom items-center">
                <div className="nav-item">
                    About
                </div>
                <div className="nav-item">
                    Education
                </div>
                <div className="nav-item">
                    Skills
                </div>
                <div className="nav-item">
                    Projects
                </div>
                <div className="nav-item">
                    Certifications
                </div>
            </section>
        </header>

        <section className="flex flex-col mt-2 items-center justify-center w-full">
            <div className="flex items-center justify-center w-full">
                <div className="flex flex-col items-start gap-2 justify-start w-2/3">
                    <h1>
                        Hey,
                    </h1>
                    <h2>
                        I'm Manikanta Varun Thunga,
                    </h2>
                    <h2>
                        Data Analyst
                    </h2>

                    <div className="flex items-center justify-start my-4 gap-4">
                        <div className={'icon-holder facebook'}>
                            <i className={'fab fa-facebook-f text-2xl'}></i>
                        </div>
                        <div className={'icon-holder linkedin'}>
                            <i className={'fab fa-linkedin-in text-2xl'}></i>
                        </div>
                        <div className={'icon-holder github'}>
                            <i className={'fab fa-github text-2xl'}></i>
                        </div>
                        <div className={'icon-holder instagram'}>
                            <i className={'fab fa-instagram text-2xl'}></i>
                        </div>
                    </div>

                    <section className={'flex items-center  gap-8'}>
                        <button className={'btn-yellow rounded-full'}>
                            Message me
                        </button>
                        <button className={'btn-white rounded-full'}>
                            Download CV
                        </button>
                    </section>
                </div>
                <div className="flex relative flex-col items-center justify-center w-1/3">
                    <img className="w-full rounded-md z-50" src="/images/image%201.png" alt="Javier"/>
                    <div className={'img-holder z-10 absolute w-[700px] h-[700px]'}>
                    </div>
                </div>
            </div>
        </section>

        <section className="flex mt-32 items-center justify-center w-full">
            <div className={'w-1/2 flex justify-center items-center'}>
                <img className={'w-3/4'} src="/images/image%202.png" alt=""/>
            </div>

            <div className={'w-1/2'}>
                <div className="flex flex-col items-start justify-start gap-2">
                    <h1 className={''}>
                        <span className={'text-yellow-500'}>About</span> Me
                    </h1>
                    <p className={'text-md'}>
                        Hello, I'm Varun, a passionate data enthusiast currently pursuing my Graduate Level
                        Certificate in Data Mining at the New Jersey Institute of Technology. With a strong
                        foundation in web technologies like HTML, CSS, and JavaScript, coupled with proficiency in
                        data manipulation using SQL and Python, I'm well-equipped to excel in the field of data
                        analysis.
                        <br></br> <br></br>
                        My journey in the world of data analysis has been driven by a relentless curiosity to
                        uncover meaningful insights from complex datasets. I have a keen eye for detail and an
                        analytical mindset, which allows me to extract valuable information from data to drive
                        informed decision-making.
                        <br></br><br></br>
                        I'm excited about the prospect of leveraging my knowledge and skills to make a meaningful
                        impact in the field of data analysis. If you're looking for a dedicated and motivated data
                        analyst with a strong technical foundation, I'd love to connect and explore opportunities to
                        contribute to your team's success.

                    </p>
                </div>
            </div>
        </section>

        <section className="flex flex-col mt-20 items-center justify-center w-full">
            <h2 className={'text-yellow-500'}>
                Experience
            </h2>

            <div className={'flex flex-col items-center justify-center gap-2 mt-4'}>
                <div className={'flex items-center justify-center gap-6'}>
                    <div className={"text-8xl gap-6"}>
                            <span className={'text-yellow-500'}>
                                4
                            </span>
                        +
                    </div>

                    <div className={'flex flex-col items-start justify-center gap-1'}>
                        Data Analyst - NJIT Company
                        <span className={'text-gray-400'}>
                                2018-present
                            </span>
                    </div>

                </div>
            </div>
        </section>


        <section className="flex flex-col gap-6 mt-10 items-center justify-center w-full">
            <h2 className={''}>
                # <span className={'text-yellow-500'}>
                    Skills
                </span>
            </h2>
            <div className="skill-btn">
                <button>
                    HTML
                </button>
                <button>
                    CSS
                </button>
                <button>
                    Python
                </button>
                <button>
                    JavaScript
                </button>
                <button>
                    SQL
                </button>
            </div>
        </section>

        <section className="flex gap-6 mt-10 items-center px-12 justify-center w-full">
            <h2 className={'flex flex-col w-1/2'}>
                    <span>
                        My
                    </span>
                <span className={'text-yellow-500'}>
                    Education
                </span>
            </h2>
            <div className="flex flex-col w-1/2 gap-6">
                <div className="my-card">
                    <div className="text-yellow-500">
                        Graduate Level Certificate in Data Mining
                    </div>
                    <div className="text-gray-400">
                        New Jersey Institute of Technology
                    </div>
                    <div className="text-xs mt-2">
                        Newark, New Jersey
                    </div>
                </div>

                <div className="my-card">
                    <div className="text-yellow-500">
                        Bachelor of Mechanical Engineering
                    </div>
                    <div className="text-gray-400">
                        Vallore Institute of Technology
                    </div>
                    <div className="text-xs mt-2">
                        India
                    </div>
                </div>
            </div>
        </section>

        <section className="flex flex-col gap-6 mt-10 items-center justify-center w-full">
            <h2 className={''}>
                # <span className={'text-yellow-500'}>
                    Projects
                </span>
            </h2>
            <div className="grid grid-cols-2 gap-5">
                <div className="my-card">
                    <div className="text-yellow-500">
                        Capstone
                    </div>
                    <div className="text-gray-50">
                        Design and Development of Personal protection
                        equipment using Auxetic Structures
                    </div>
                    <div className="text-xs mt-2">
                        2018
                    </div>
                </div>

                <div className="my-card">
                    <div className="text-yellow-500">
                        Inventory Management System
                    </div>
                    <div className="text-gray-50">
                        Inventory Management System using pyhton
                        for ML/AI
                    </div>
                    <div className="text-xs mt-2">
                        2018
                    </div>
                </div>
            </div>
        </section>

        <section className="flex flex-col gap-6 mt-10 items-center justify-center w-full">
            <h2 className={''}>
                # <span className={'text-yellow-500'}>
                    Certifications
                </span>
            </h2>
            <div className="grid grid-cols-2 gap-5">
                <div className="my-card w-full">
                    <div className="text-yellow-50">
                        AI for Everyone - DeepLearning.AI
                    </div>
                </div>

                <div className="my-card w-full">
                    <div className="text-yellow-50">
                        Autodesk CAD/CAM/CAE for Mechanical Engineering
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-5">

                <div className="my-card">
                    <div className="text-yellow-50">
                        Mechanical Design Internship
                    </div>
                </div>
            </div>
        </section>

        <section className="flex flex-col gap-6 mt-10 items-center justify-center w-full">
            <h2 className={''}>
                Get My
                <span className={'text-yellow-500'}>
                    Resume
                </span>
            </h2>
            <div className="gap-5">

                <div className="join w-full">
                    <input className="input w-[400px] input-bordered bg-white border-0 rounded-l-full join-item"
                           placeholder="
                    Enter email address
                    "/>
                    <button className="btn join-item border-0 btn-yellow rounded-r-full">
                        Submit
                    </button>
                </div>

                <div className="text-center my-4">
                    mt638@njit.edu - +1 (551)-998-7668
                </div>

                <section className={'flex items-center mt-6 justify-center gap-8'}>
                    <button className={'btn-yellow rounded-full'}>
                        Message me
                    </button>
                    <button className={'btn-white rounded-full'}>
                        Download CV
                    </button>
                </section>


                <div className="flex items-center justify-center my-8 pb-24 gap-4">
                    <div className={'icon-holder facebook'}>
                        <i className={'fab fa-facebook-f text-2xl'}></i>
                    </div>
                    <div className={'icon-holder linkedin'}>
                        <i className={'fab fa-linkedin-in text-2xl'}></i>
                    </div>
                    <div className={'icon-holder github'}>
                        <i className={'fab fa-github text-2xl'}></i>
                    </div>
                    <div className={'icon-holder instagram'}>
                        <i className={'fab fa-instagram text-2xl'}></i>
                    </div>
                </div>

            </div>
        </section>


    </main>)
}
