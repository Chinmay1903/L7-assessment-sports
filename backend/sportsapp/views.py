from django.http import JsonResponse
from rest_framework.views import APIView
from .models import Team, PlayerDetail, Match, Area
from django.forms.models import model_to_dict
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from datetime import datetime

class TeamView(APIView):
    """
    API View to retrieve a list of all teams.
    """

    @swagger_auto_schema(
        operation_description="Retrieve a list of all teams",
        responses={200: openapi.Response(
            'List of teams',
            examples={
                'application/json': [
                    {"id": 1, "name": "Team A", "coach": "Coach A"},
                    {"id": 2, "name": "Team B", "coach": "Coach B"},
                ]
            }
        )}
    )
    def get(self, request):
        """
        GET method to retrieve all teams.
        """
        teams = Team.objects.all()
        teams_list = [model_to_dict(team) for team in teams]
        return JsonResponse(teams_list, safe=False)

class PlayerDetailView(APIView):
    """
    API View to retrieve a list of all players.
    """

    @swagger_auto_schema(
        operation_description="Retrieve a list of all players, or players for a specific team if team index is provided",
        responses={200: openapi.Response(
            'List of players',
            examples={
                'application/json': [
                    {"id": 1, "name": "Player 1", "age": 25, "team": "Team A"},
                    {"id": 2, "name": "Player 2", "age": 27, "team": "Team B"},
                ]
            }
        )}
    )
    def get(self, request, team_id=None):
        """
        GET method to retrieve all players or players of a specific team if team index is provided.
        """
        if team_id:
            # Filter players by the team ID
            players = PlayerDetail.objects.filter(team_id=team_id)
        else:
            # Retrieve all players if no team_id is provided
            players = PlayerDetail.objects.all()

        # Convert players to a list of dictionaries
        players_list = [
            {
                "id": player.id,
                "name": player.name,
                "age": player.age,
                "team": player.team.name  # Return team name instead of ID
            }
            for player in players
        ]
        return JsonResponse(players_list, safe=False)

class MatchView(APIView):
    """
    API View to retrieve a list of all matches.
    """

    @swagger_auto_schema(
        operation_description="Retrieve a list of all matches",
        responses={200: openapi.Response(
            'List of matches',
            examples={
                'application/json': [
                    {"id": 1, "home_team__name": "Team A", "away_team__name": "Team B", "date": "2024-10-15T14:30:00Z", "location__name": "Stadium A"},
                    {"id": 2, "home_team__name": "Team C", "away_team__name": "Team D", "date": "2024-10-16T14:30:00Z", "location__name": "Stadium B"},
                ]
            }
        )}
    )
    def get(self, request):
        """
        GET method to retrieve all matches.
        """
        # matches = Match.objects.all()
        # matches_list = [model_to_dict(match) for match in matches]
        matches = Match.objects.values(
            'id',
            'home_team__name',  
            'away_team__name',  
            'date',             
            'location__name'
        )
        matches_list = []
        for match in matches:
            match['date'] = datetime.strptime(match['date'].strftime("%Y-%m-%d %H:%M:%S"), "%Y-%m-%d %H:%M:%S").strftime("%d %B %Y, %I:%M %p")
            matches_list.append(match)
        return JsonResponse(matches_list, safe=False)

class AreaView(APIView):
    """
    API View to retrieve a list of all areas.
    """

    @swagger_auto_schema(
        operation_description="Retrieve a list of all areas",
        responses={200: openapi.Response(
            'List of areas',
            examples={
                'application/json': [
                    {"id": 1, "name": "Stadium A", "city": "City A"},
                    {"id": 2, "name": "Stadium B", "city": "City B"},
                ]
            }
        )}
    )
    def get(self, request):
        """
        GET method to retrieve all areas.
        """
        areas = Area.objects.all()
        areas_list = [model_to_dict(area) for area in areas]
        return JsonResponse(areas_list, safe=False)

