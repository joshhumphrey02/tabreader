import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, Dot, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import SideBar from '@/components/sideBar';

function App() {
	return (
		<>
			<div className="min-h-screen overflow-y-hidden">
				{/* Header */}
				<div className="min-h-12 shadow flex justify-between items-center py-3 px-4 md:px-12 ">
					<h2 className="text-2xl font-bold">
						Tab <span className="text-blue-500">Reader</span>
					</h2>
					<div className="flex items-center space-x-4">
						<Button className="hidden md:flex rounded-2xl py-2 h-8 px-6">
							Log in
						</Button>
						<Button className="rounded-2xl py-2 h-8">Get started</Button>
						<SideBar />
					</div>
				</div>
				{/* Hero */}
				<div className="my-9 px-4 md:px-12">
					<div className="mx-auto">
						<div className="mb-5">
							<h1 className="text-[1.8rem] md:text-5xl font-bold text-center">
								Life Planning, Making
							</h1>
							<h1 className="text-[1.8rem] md:text-5xl font-bold text-center">
								Easy to Turn Dreams to Reality
							</h1>
						</div>
						<div className="space-y-8">
							<p className="text-sm md:text-base text-center">
								Get Exclusive offers on purchase of any plans
							</p>
							<div className="flex justify-center items-center gap-x-3 ">
								<div className="flex items-center gap-x-3 rounded-3xl px-4 border border-border">
									<Send />
									<Input
										type="text"
										placeholder="Your Email"
										className="border-none focus-visible:ring-0 focus-visible:ring-transparent "
									/>
								</div>
								<Button className=" rounded-3xl">Sign up</Button>
							</div>
						</div>
					</div>
				</div>
				{/* Features */}
				<div className="px-4 md:px-12 space-y-4">
					<div className="flex justify-between items-center">
						<h3 className="text-xl font-bold">Featured Plans</h3>
						<span className="text-sm font-bold">Explore All</span>
					</div>
					<div>
						<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
							{Plans.map((plan) => (
								<Card
									key={plan.id}
									className={cn(
										'w-full min-h-[15rem] px-6 py-4 rounded-xl flex flex-col',
										plan.color
									)}>
									<div className="flex-1 space-y-2">
										<span className="text-gray-800 text-base">{plan.name}</span>
										<h4 className="text-lg font-bold">{plan.name}</h4>
										<p className="text-sm">{plan.description}</p>
									</div>
									<div className="flex-1 flex  items-end py-4">
										<div className="flex flex-1 items-center justify-between">
											<span className="text-xl font-bold">
												<span>NGN</span> {plan.price}
											</span>
											<span className="p-[2px] rounded-lg bg-black text-white">
												<ChevronRight />
											</span>
										</div>
									</div>
								</Card>
							))}
						</div>
					</div>
				</div>
				{/* Footer */}
				<div className="px-4 md:px-12 mt-4">
					<div className="flex justify-between items-center border-t-2 border-border py-4">
						<div className="flex space-x-3">
							<span className="text-sm font-semibold">Terms Policy</span>
							<Dot />
							<span className="text-sm font-semibold">Customer Story</span>
						</div>
						<span className="border border-black rounded-full p-1">
							<ArrowRight />
						</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;

const Plans = [
	{
		id: 1,
		color: 'bg-blue-600',
		name: 'Basic',
		price: 100,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
		features: [
			'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		],
	},
	{
		id: 2,
		color: 'bg-green-600',
		name: 'Basic',
		price: 100,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
		features: [
			'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		],
	},
	{
		id: 3,
		color: 'bg-black text-white',
		name: 'Basic',
		price: 100,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
		features: [
			'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		],
	},
	{
		id: 4,
		color: 'bg-red-600',
		name: 'Basic',
		price: 100,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
		features: [
			'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		],
	},
];
