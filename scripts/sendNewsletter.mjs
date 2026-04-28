import Mailchimp from "@mailchimp/mailchimp_marketing";
import { blogPosts } from "./blogData.mjs";

Mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_DC,
});

console.log("DC:", process.env.MAILCHIMP_DC);
console.log("KEY suffix:", process.env.MAILCHIMP_API_KEY?.slice(-4));

// Gets the latest post (first in the array)
const latestPost = blogPosts[0];

const campaignUrl = `https://heritagecare.lk/knowledge-hub/${latestPost.slug}`;

console.log(`📧 Sending newsletter for: ${latestPost.title}`);

// 1. Create campaign
const campaign = await Mailchimp.campaigns.create({
  type: "regular",
  recipients: { list_id: process.env.MAILCHIMP_AUDIENCE_ID },
  settings: {
    subject_line: `New Article: ${latestPost.title}`,
    from_name: "Heritage Care",
    reply_to: "heritagecarelk@gmail.com",
    title: latestPost.title,
  },
});

// 2. Set email content
await Mailchimp.campaigns.setContent(campaign.id, {
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border-radius: 12px; overflow: hidden; border: 1px solid #d4edda;">
      
      <div style="background-color: #99BC85; padding: 28px 24px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 20px;">Heritage Care</h1>
        <p style="color: #b7e4c7; margin: 6px 0 0; font-size: 13px;">Knowledge Hub Update</p>
      </div>

      <div style="padding: 32px 24px;">
        <p style="color: #888; font-size: 13px; margin-top: 0;">${latestPost.date}</p>
        <h2 style="color: #99BC85; margin-top: 0;">${latestPost.title}</h2>
        <p style="color: #555; line-height: 1.6;">${latestPost.excerpt}</p>
        <div style="text-align: center; margin: 28px 0;">
          <a href="${campaignUrl}"
            style="background-color: #99BC85; color: white; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: bold;">
            Read Article →
          </a>
        </div>
      </div>

      <div style="background-color: #f8f8f8; padding: 16px 24px; text-align: center;">
        <p style="color: #999; font-size: 12px; margin: 0;">
          You're receiving this because you subscribed to Heritage Care updates.
        </p>
      </div>

    </div>
  `,
});

// 3. Send
await Mailchimp.campaigns.send(campaign.id);
console.log(`✅ Newsletter sent: ${latestPost.title}`);