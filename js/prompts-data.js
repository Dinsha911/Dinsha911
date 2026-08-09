const promptsData = [

    {
        id: "youtube-video-script",
        title: "YouTube Video Script",
        category: "writing",
        icon: "🎬",
        description: "Create an engaging YouTube script with a strong hook, clear structure and audience retention.",
        prompt: `Act as an expert YouTube scriptwriter.

Create a highly engaging YouTube script about:

[TOPIC]

Target audience:
[AUDIENCE]

The script should include:

1. A powerful hook in the first 10 seconds.
2. A clear introduction.
3. Useful and easy-to-understand information.
4. Curiosity loops that encourage viewers to keep watching.
5. Natural transitions between sections.
6. A strong conclusion.
7. A clear call to action.

Write in a natural, conversational style.

Avoid unnecessary filler and generic statements.`
    },


    {
        id: "professional-email-writer",
        title: "Professional Email Writer",
        category: "writing",
        icon: "✉️",
        description: "Turn rough ideas into clear, professional and natural emails.",
        prompt: `Act as a professional business communication expert.

Rewrite the following message into a clear, professional and natural email:

[PASTE YOUR MESSAGE]

Requirements:

- Keep the original meaning.
- Make the message easy to understand.
- Use professional but friendly language.
- Remove unnecessary words.
- Make the request or purpose clear.

Return only the finished email.`
    },


    {
        id: "ai-image-prompt-generator",
        title: "AI Image Prompt Generator",
        category: "image",
        icon: "🎨",
        description: "Create detailed prompts for AI image generation tools.",
        prompt: `Act as an expert AI image prompt engineer.

Create a highly detailed image-generation prompt based on this idea:

[YOUR IDEA]

Include:

- Subject
- Environment
- Composition
- Camera angle
- Lighting
- Color mood
- Materials and textures
- Clothing or appearance
- Background
- Realistic details
- Image quality

Write the final prompt as one polished prompt that can be used directly in an AI image generator.`
    },


    {
        id: "social-media-caption",
        title: "Social Media Caption",
        category: "marketing",
        icon: "📣",
        description: "Create engaging social media captions designed to encourage interaction.",
        prompt: `Act as an expert social media content strategist.

Create an engaging social media caption about:

[TOPIC]

Platform:
[FACEBOOK / INSTAGRAM / LINKEDIN / OTHER]

Target audience:
[AUDIENCE]

The caption should:

- Start with an attention-grabbing opening.
- Provide useful or interesting information.
- Encourage engagement.
- Use natural language.
- Avoid sounding like an advertisement.

Add a suitable call to action and relevant hashtags.`
    },


    {
        id: "code-debugging-assistant",
        title: "Code Debugging Assistant",
        category: "coding",
        icon: "💻",
        description: "Analyze code, identify problems and explain how to fix them.",
        prompt: `Act as an expert software developer.

Analyze the following code:

[PASTE CODE]

Identify:

1. Errors or bugs.
2. The reason each problem occurs.
3. How to fix each problem.
4. Any improvements that would make the code cleaner or safer.

Explain the solution clearly for a beginner.

Do not rewrite the entire project unless necessary.`
    },


    {
        id: "daily-productivity-planner",
        title: "Daily Productivity Planner",
        category: "productivity",
        icon: "📊",
        description: "Turn a list of tasks into a practical daily schedule.",
        prompt: `Act as a productivity coach.

Create a realistic daily schedule using these tasks:

[TASKS]

Available time:
[START TIME] to [END TIME]

Priorities:
[HIGH / MEDIUM / LOW]

Create a practical schedule with:

- Priority order
- Time blocks
- Short breaks
- Estimated duration
- A realistic workload

Avoid creating an unrealistic schedule with too many tasks.`
    }

];
