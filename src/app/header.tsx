import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"

const header = () => {
  return (
    <div className="border-b py-4 bg-gray-50">
        <div className="items-center container mx-auto justify-between flex">
            <div>File Drive</div>
            <div className="flex gap-2">
                <OrganizationSwitcher />
                <UserButton />
            </div>
            
        </div>
    </div>
  )
}

export default header