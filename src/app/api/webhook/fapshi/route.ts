// Webhook handler for Fapshi payment confirmations
// This handles payment status updates from Fapshi

import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('x-fapshi-signature');
    
    // Verify webhook signature
    const webhookSecret = process.env.FAPSHI_WEBHOOK_SECRET;
    if (!webhookSecret) {
      return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 });
    }

    const expectedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(body)
      .digest('hex');

    if (signature !== expectedSignature) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    const paymentData = JSON.parse(body);
    
    // Handle different payment statuses
    switch (paymentData.status) {
      case 'completed':
        // Payment successful - update your database
        console.log('Payment completed:', paymentData);
        // TODO: Update vote count, send confirmation email, etc.
        break;
        
      case 'failed':
        // Payment failed
        console.log('Payment failed:', paymentData);
        // TODO: Handle failed payment
        break;
        
      case 'expired':
        // Payment expired
        console.log('Payment expired:', paymentData);
        // TODO: Handle expired payment
        break;
        
      default:
        console.log('Unknown payment status:', paymentData);
    }

    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
}
