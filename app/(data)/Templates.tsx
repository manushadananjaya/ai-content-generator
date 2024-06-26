const templates = [
    {
        name: "Blog Title",
        desc: "An AI tool that generate blog title depends on your blog content",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/2799/2799954.png",
        aiPrompt:
            "Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format",
        slug: "generate-blog-title",
        form: [
            {
                label: "Enter your blog niche",
                field: "input",
                name: "niche",
                required: true,
            },
            {
                label: "Enter your blog outline",
                field: "textarea",
                name: "outline",
                required: true,
            },
        ],
    },
    {
        name: "Blog Content",
        desc: "An AI tool that generate blog content depends on your blog title",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/2799/2799954.png",
        aiPrompt:
            "Write a blog content based on the blog title and give me result in Rich text editor format",
        slug: "generate-blog-content",
        form: [
            {
                label: "Enter your blog title",
                field: "input",
                name: "title",
                required: true,
            },
        ],
    },
    {
        name: "Youtube Tags",
        desc: "An AI tool that generate youtube tags depends on your youtube video content",
        category: "Youtube tool",
        icon: "https://cdn-icons-png.flaticon.com/128/2799/2799954.png",
        aiPrompt:
            "Give me 5 youtube tags idea in bullet wise only based on give video content and give me result in Rich text editor format",
        slug: "generate-youtube-tags",
        form: [
            {
                label: "Enter your video content",
                field: "textarea",
                name: "content",
                required: true,
            },
        ],
    },
    
];

export default templates;
