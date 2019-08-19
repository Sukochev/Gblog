import os

from .base import *  # noqa: F401, F403

TEST_MODE = True

DATABASES = {"default": {"ENGINE": "django.db.backends.sqlite3", "NAME": ":memory:"}}

PASSWORD_HASHERS = ("django.contrib.auth.hashers.MD5PasswordHasher",)

EMAIL_BACKEND = "django.core.mail.backends.locmem.EmailBackend"

TEST_ENV = os.environ.get("TEST_ENV", "")
