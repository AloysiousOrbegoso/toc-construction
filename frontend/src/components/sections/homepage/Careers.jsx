import careersimage from "../../../assets/homepage/Careers.avif";
import WipeButton from "../../ui/WipeButton";
const roles = [
        "Senior Engineer",
        "Junior Engineer",
        "Quality Assurance",

];

export default function Careers()
{
    return(
            <section className ='bg-white px-6 py-16 font-sans text-neutral-950 sm:px-10 lg:px-16 lg:py-20'>
                <div className="mx-auto max-w-6xl">
                    <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.002em]">
                        Careers
                    </p>
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                        Our Open Roles
                    </h2>
                    <div className="mt-8 grid items-center gap-10 md:grid-cols-[1.3fr_0.9fr] md:gap-14 lg:mt-7 lg:grid-cols-[1.35fr_0.9fr] lg:gap-16">
                        <div className="space-y-8">
                            {roles.map((role)=>(
                                <div key={role} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:gap-8">
                                    <div>
                                    <p className="text-[9px] font-medium uppercase">Available</p>
                                    <h3 className="mt-1 text-xl font-semibold leading-none sm:text-2xl">{role}</h3>
                                    <p className="mt-1 text-[16px] text-neutral-500">Full Time - 500,000 - Manila</p>   
                                    </div>
                                    <WipeButton>Submit Your Application</WipeButton>
                                </div>
                            ))}
                        </div>
                        <div className="overflow-hidden rounded-md">
                            <img src ={careersimage} alt="Construction" className ="aspect-[1.45/1] w-full object-cover"
                            />

                        </div>
                    </div>
                </div>
            </section>
    );
}