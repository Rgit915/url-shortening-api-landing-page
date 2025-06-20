import UrlItem from "./UrlItem"

const UrlList = ({ links }) => {
  if (links.length === 0) return null

  return (
    <div className="mt-4 space-y-4">
      {links.map((link, index) => (
        <UrlItem key={index} link={link} />
      ))}
    </div>
  )
}

export default UrlList;
