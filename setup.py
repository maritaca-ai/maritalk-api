from setuptools import setup, find_packages
  
setup(
    name='Maritalk',
    version='0.1',
    description='Maritalk ',
    author='Maritaca AI',
    author_email='info@maritaca.ai',
    packages=find_packages(include=['maritalk', 'maritalk.*']),
    install_requires=[
        'requests'
    ],
)