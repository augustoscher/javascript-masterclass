const subscriptions = [
  {"subscriptionId":285141662},
  {"subscriptionId":285141659},
]

async function cancelSubscription(id) {
  const url = `http://localhost:8585/subscriptions/${id}/cancel?reason=EXPIRED`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error(`Failed to cancel subscription ${id}, status: ${response.status}`);
    }

    console.log(`Subscription ${id} cancelled successfully`);
  } catch (error) {
    console.error(`Error cancelling subscription ${id}:`, error.message);
  }
}

function cancelAllSubscriptions(ids) {
  for (const id of ids) {
    cancelSubscription(id);
  }
}

cancelAllSubscriptions(subscriptions.map(sub => sub.subscriptionId));