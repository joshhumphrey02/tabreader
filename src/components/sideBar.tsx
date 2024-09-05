import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import gsap from 'gsap';
import { useEffect, useState } from 'react';

export default function SideBar() {
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		gsap.fromTo(
			'.link',
			{ opacity: 0, x: 100 }, // Start state
			{ opacity: 1, x: 0, stagger: 0.2, duration: 1.5, ease: 'power2.out' } // End state
		);
	}, [isOpen]);
	return (
		<Sheet onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Menu className="w-7 h-7 ml-2" />
			</SheetTrigger>
			<SheetContent className="flex flex-col">
				<SheetHeader>
					<SheetTitle>Tab Reader</SheetTitle>
				</SheetHeader>
				<div className="flex-1">
					<div>
						<ul className=" grid space-y-2">
							{sideBarLinks.map((link, i) => (
								<Links key={i} title={link.title} />
							))}
						</ul>
					</div>
				</div>
				<SheetFooter>
					<SheetClose asChild>
						<Button>Close</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}

interface FadeInProps {
	title: string;
}

function Links({ title }: FadeInProps) {
	return (
		<li>
			<a
				className="link hover:bg-gray-100 flex w-full py-2 px-2 rounded-lg hover:text-blue-500 transition-all "
				href="#">
				{title}
			</a>
		</li>
	);
}

const sideBarLinks = [
	{
		title: 'Home',
	},
	{
		title: 'About',
	},
	{
		title: 'Contact',
	},
	{
		title: 'Pricing',
	},
	{
		title: 'Blog',
	},
	{
		title: 'Login',
	},
	{
		title: 'Sign Up',
	},
];
