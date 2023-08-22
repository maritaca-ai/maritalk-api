from setuptools import setup, find_packages

setup(
    name="MariTalk",
    version="0.1",
    description="Client library for the MariTalk API",
    author="Maritaca AI",
    author_email="info@maritaca.ai",
    packages=find_packages(include=["maritalk", "maritalk.*"]),
    install_requires=["requests"],
)
