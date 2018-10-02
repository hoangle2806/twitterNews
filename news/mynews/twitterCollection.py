import tweepy
from tweepy.auth import OAuthHandler


#credentials
consumer_key = 'ODXVA9GLtkSBfHMHqZ4B24zdJ'
consumer_secret = '0w8faeWL2UrRkdEfqBGOQFZUkYmjw7PJQWXN6zTpg7IzQivGX1'
access_token = '812592095743512576-uSb3oXpXPAv2Nfx00y0h7Sotlf7ChYf'
access_token_secret = 'bw6HHzLGbGyZdbDtUozr1XusUzFuHmWwb1qTheb8dCKWF'

#function to extract tweets:
def getTweetsByUser(username,amountOfTweets):
    '''
    Get the last 3 hours tweets contents and do data analysis with it. 
    '''
    #authroization
    auth = OAuthHandler(consumer_key,consumer_secret)
    #access to user's key 
    auth.set_access_token(access_token,access_token_secret)

    #calling API
    api = tweepy.API(auth)

    #extracted desired amount of tweet
    tweets = api.user_timeline(screen_name=username, count =amountOfTweets,tweet_mode = 'extended',)

    result = []
    for info in tweets:
        temp = {}
        temp['id'] = str(info.id)
        temp['created_at'] = info.created_at.strftime("%m/%d/%Y at %H o'clock")
        temp['full_text'] = info.full_text
        result.append(temp)
    return result

#=================test script=================
# print getTweetsByUser("cnn", 5)