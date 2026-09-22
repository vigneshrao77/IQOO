from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.auth import current_user
from app.db.postgres import get_db
from app.models import User

router = APIRouter(prefix="/api/student", tags=["student"])


@router.get("/dashboard")
async def get_student_dashboard(
    user: User = Depends(current_user),
    db: AsyncSession = Depends(get_db),
) -> dict:
    return {
        "project": {
            "name": "E-Commerce Platform",
            "client": "ABC Technologies",
            "stage": "In Progress",
            "progress": 68,
            "deadline": "26 Sep 2026",
        },
        "stats": {
            "totalTasks": 12,
            "completed": 8,
            "openIssues": 3,
            "pendingReviews": 2,
        },
        "strengths": ["Backend APIs", "Database Design", "Problem Solving"],
        "focusAreas": ["Deployment", "Client Communication", "Unit Tests"],
        "quickActions": [
            {"id": 1, "label": "Ask AI Mentor", "icon": "Sparkles", "path": "/student/mentor"},
            {"id": 2, "label": "View Project Tasks", "icon": "CheckSquare", "path": "/student/project"},
            {"id": 3, "label": "Knowledge Base", "icon": "BookOpen", "path": "/student/kb"},
            {"id": 4, "label": "System Architecture", "icon": "Network", "path": "/student/project"},
        ],
    }


@router.get("/profile")
async def get_student_profile(
    user: User = Depends(current_user),
    db: AsyncSession = Depends(get_db),
) -> dict:
    return {
        "id": user.id,
        "name": user.name,
        "email": user.email,
        "role": "Student Developer",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
        "project": "E-Commerce Platform",
        "client": "ABC Technologies",
        "sprintProgress": 68,
        "deadline": "26 Sep 2026",
    }
