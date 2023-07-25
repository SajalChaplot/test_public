import { useEffect, useState } from "react";
import { builder } from "@builder.io/react";

// Put your API key here
builder.init("34de2f10015c434ab8c94fe00ea148d8");

export default function App() {
  const [links, setLinks] = useState([]);

  // Get the CMS data from Builder
  useEffect(() => {
    async function fetchContent() {
      const links = await builder.getAll("nav-links", {
        // You can use options for queries, sorting, and targeting here
        // https://github.com/BuilderIO/builder/blob/main/packages/core/docs/interfaces/GetContentOptions.md
      });
      setLinks(links);
    }
    fetchContent();
  }, []);

  return (
    <>
      <header>
        <nav>
          {links.map((link, index) => (
            <a key={index} href={link.data.url}>
              {link.data.label}
            </a>
          ))}
        </nav>
      </header>
      {/* Put the rest of your page here */}
      {/* <RestOfYourPage /> */}
    </>
  );
}