import { revalidatePath } from "next/cache";
export async function POST(request) {
  try {
    // const text = await request.text();
    // const obj = JSON.parse(text);
    const body = await request.json();
    const alias = {
      "landing-page": "home",
      about: "about",
      "technology-solution": "design-services",
      solution: "solutions",
      technology: "technology",
      "cms-technology": "technology/cms",
      techcommerce: "technology/commerce",
      "tech-microservice": "technology/microservices",
      "tech-cloud-and-dev-sec-op": "technology/cloud-devsec-ops",
      "data-intelligence": "technology/data-intelligence",
      "custom-development": "technology/custom-development",
      "analytics-automation": "technology/analytics-automation",
      portfolio: "portfolio",
      career: "careers",
      insight: "insights",
      coe: "coe",
      "contact-us": "contact-us",
      "privacy-policy": "privacy-policy",
      sitemap: "sitemap",
      accelerator: "accelerators",
      "accelerators-detail": "accelerators",
      "case-study": "portfolio",
      "insight-inside": "insights",
      "career-detail": "careers",
    };
    revalidatePath(`/${body.model}`, "layout");
  } catch (error) {
    return new Response(`Webhook error: ${error.message}`, {
      status: 400,
    });
  }

  return new Response("Success!", {
    status: 200,
  });
}
