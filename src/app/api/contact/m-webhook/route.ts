import { type NextRequest, NextResponse } from 'next/server';
import { routes } from '@/constants/routes';
import { generateFormText } from '@/helpers/markdown';

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const { formType } = reqBody;

    const text = generateFormText(formType, reqBody);

    const response = await fetch(routes.webhook.mattermost, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error(await response.text());
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
