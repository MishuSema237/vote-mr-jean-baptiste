// Fapshi Payment Integration Service
// Based on official Fapshi API documentation: https://docs.fapshi.com/en/api-reference/getting-started

interface FapshiPaymentRequest {
  amount: number;
  currency: string;
  phone: string;
  paymentMethod: 'mtn' | 'orange';
  description: string;
  packageTitle: string;
  packagePoints: number;
}

interface FapshiPaymentResponse {
  success: boolean;
  paymentUrl?: string;
  transactionId?: string;
  message: string;
}

interface FapshiInitiatePayRequest {
  amount: number;
  currency: string;
  phone: string;
  payment_method: 'mtn' | 'orange';
  description: string;
  callback_url: string;
      metadata?: Record<string, unknown>;
}

class FapshiService {
  private baseUrl = 'https://api.fapshi.com'; // Official Fapshi API base URL
  private apiKey: string;
  private apiUser: string;

  constructor() {
    // These should come from environment variables
    this.apiKey = process.env.FAPSHI_API_KEY || '';
    this.apiUser = process.env.FAPSHI_API_USER || '';
  }

  async createPayment(paymentData: FapshiPaymentRequest): Promise<FapshiPaymentResponse> {
    try {
      const payload: FapshiInitiatePayRequest = {
        amount: paymentData.amount,
        currency: paymentData.currency,
        phone: paymentData.phone,
        payment_method: paymentData.paymentMethod,
        description: paymentData.description,
        callback_url: `${window.location.origin}/payment/callback`,
        metadata: {
          package_title: paymentData.packageTitle,
          package_points: paymentData.packagePoints,
          candidate: 'Jean Baptiste Toche',
          contest: 'Mister Tourism Africa Cameroon'
        }
      };

      // Using Fapshi's "Initiate Pay" endpoint for prebuilt checkout
      const response = await fetch(`${this.baseUrl}/payments/initiate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
          'X-API-User': this.apiUser
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        return {
          success: true,
          paymentUrl: data.checkout_url, // Fapshi provides checkout_url
          transactionId: data.transaction_id,
          message: 'Payment initiated successfully'
        };
      } else {
        return {
          success: false,
          message: data.message || data.error || 'Payment failed'
        };
      }
    } catch (error) {
      console.error('Fapshi API Error:', error);
      return {
        success: false,
        message: 'Network error. Please try again.'
      };
    }
  }

  async getPaymentStatus(transactionId: string): Promise<{
    status: 'pending' | 'completed' | 'failed' | 'expired';
    amount?: number;
    currency?: string;
  }> {
    try {
      const response = await fetch(`${this.baseUrl}/payments/${transactionId}/status`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'X-API-User': this.apiUser
        }
      });

      const data = await response.json();
      
      if (response.ok) {
        return {
          status: data.status,
          amount: data.amount,
          currency: data.currency
        };
      } else {
        return { status: 'failed' };
      }
    } catch (error) {
      console.error('Payment status check error:', error);
      return { status: 'failed' };
    }
  }

  async expirePayment(transactionId: string): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/payments/${transactionId}/expire`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'X-API-User': this.apiUser
        }
      });

      return response.ok;
    } catch (error) {
      console.error('Payment expiration error:', error);
      return false;
    }
  }
}

export const fapshiService = new FapshiService();
export type { FapshiPaymentRequest, FapshiPaymentResponse };
